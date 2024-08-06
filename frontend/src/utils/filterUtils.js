export const SORT_OPTIONS = {
    TITLE_ASC: 'title_asc',
    TITLE_DESC: 'title_desc',
    DATE_NEWEST: 'date_newest',
    DATE_OLDEST: 'date_oldest',
    PRICE_HIGH_LOW: 'price_high_low',
    PRICE_LOW_HIGH: 'price_low_high'
};

export const sortStamps = (stamps, sortOption) => {
    switch (sortOption) {
        case SORT_OPTIONS.TITLE_ASC:
            return [...stamps].sort((a, b) => a.title.localeCompare(b.title));
        case SORT_OPTIONS.TITLE_DESC:
            return [...stamps].sort((a, b) => b.title.localeCompare(a.title));
        case SORT_OPTIONS.DATE_NEWEST:
            return [...stamps].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case SORT_OPTIONS.DATE_OLDEST:
            return [...stamps].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        case SORT_OPTIONS.PRICE_HIGH_LOW:
            return [...stamps].sort((a, b) => (b.maxPriceSold || 0) - (a.maxPriceSold || 0));
        case SORT_OPTIONS.PRICE_LOW_HIGH:
            return [...stamps].sort((a, b) => (a.maxPriceSold || 0) - (b.maxPriceSold || 0));
        default:
            return stamps;
    }
};