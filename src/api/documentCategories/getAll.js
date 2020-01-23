import API from './../../API.js';

export default async function getAll() {
    const result = await API.get('document-category/tree');
    return result.data.data;
}
