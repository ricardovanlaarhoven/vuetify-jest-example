<template>
    <div class="category-selector">
        <VAutocomplete
            label="Zichtbaarheid"
            :items="categories"
            item-text="name"
            item-value="id"
            v-model="visibilityCategoryId"
            :rules="[(v) => !!v || 'Zichtbaarheid is een verplicht veld']"
        />
        <VAutocomplete
            label="Hoofdcategorie"
            v-if="visibilityCategoryId"
            :items="parentCategories"
            item-text="name"
            item-value="id"
            v-model="parentCategoryId"
            :rules="[(v) => !!v || 'Hoofdcategorie is een verplicht veld']"
        />
        <VAutocomplete
            label="Subcategorie"
            v-if="parentCategoryId"
            :items="subCategories"
            item-text="name"
            item-value="id"
            v-model="categoryId"
            :rules="[(v) => !!v || 'Subcategorie is een verplicht veld']"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
    name: 'CategorySelector',
    props: {
        value: {
            type: Number,
        },
    },
    data() {
        return {
            categoryId: null,
            parentCategoryId: null,
            visibilityCategoryId: null,
        };
    },
    watch: {
        value: 'updateCategories',
        categoryId: 'emitCategory',
    },
    computed: {
        ...mapGetters({flattenCategories: 'DocumentCategories/flattenCategories'}),
        ...mapState('DocumentCategories', ['categories']),
        parentCategories() {
            if (!this.visibilityCategoryId) return;
            return this.categories.find(category => category.id === this.visibilityCategoryId).children;
        },
        subCategories() {
            if (!this.parentCategories) return;
            if (!this.parentCategoryId) return;
            return this.parentCategories.find(category => category.id === this.parentCategoryId).children;
        },
    },
    async created() {
        await this.getAllCategories();
        this.updateCategories(this.value);
    },
    methods: {
        ...mapActions({getAllCategories: 'DocumentCategories/getAll'}),
        /**
         * Set the visibilityCategory and parentCategory based on the categoryId
         */
        updateCategories(categoryId) {
            if (!categoryId) return;
            const category = this.flattenCategories.find(category => category.id === categoryId);
            if (!category.isFinalDepth && !category.parentId) {
                /* The selected category is a visibility category */
                this.visibilityCategoryId = categoryId;
            } else if (!category.isFinalDepth) {
                /* The selected category is a parentCategory */
                this.visibilityCategoryId = this.flattenCategories.find(category => category.id === categoryId).parentId;
                this.parentCategoryId = categoryId;
            } else {
                /* the selected category is the final category */
                this.categoryId = categoryId;
                this.parentCategoryId = category.parentId;
                this.visibilityCategoryId = this.flattenCategories.find(category => category.id === this.parentCategoryId).parentId;
            }
        },
        emitCategory(category) {
            this.$emit('input', category);
        },
    },
};
</script>

<style scoped>

</style>
