const paginate = function({ pageSize = 10, currentPage = 1, totalItems}) {
    let totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
         currentPage = 1;
    } else if (currentPage > totalPages && totalPages < 1) {
         currentPage = totalPages;
    }
    
    let offset = (currentPage - 1) * pageSize;

    if (offset < 0 ) {
        offset = 0
    }
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        offset: offset
    };
}

const paginaterService = Object.freeze({
    paginate,
})

export default paginaterService
export { paginate }