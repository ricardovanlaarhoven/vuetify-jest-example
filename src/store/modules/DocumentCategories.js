import getAllCategories from '../../api/documentCategories/getAll.js';

export default {
    namespaced: true,
    state: {
        categories: null,
    }, mutations: {
        set(state, categories) {
            state.categories = categories;
        },
    },
    getters: {
        flattenCategories: (state) => {
            if (!state.categories) return;
            /**
             * Flatten a multidimansional array
             * We need this method to obtain the parentId of a categoryId.
             * This categoryId could be in any level
             */
            const flatten = (children, currList = []) => {
                currList.push(...children.map(child => {
                    return {
                        id: child.id,
                        name: child.name,
                        parentId: child.parent_id,
                        isFinalDepth: child.is_final_depth,
                    };
                }));
                children.forEach(child => {
                    if (child.children === null) return;
                    flatten(child.children, currList);
                });
                return currList;
            };
            return flatten(state.categories);
        },
    },
    actions: {
        async getAll(context) {
            if (context.state.categories) {
                return;
            }
            const categories = await getAllCategories();
            context.commit('set', categories);
        },
        async invalidate(context) {
            context.commit('set', null);
            await context.dispatch('getAll');
        }
    },
};
