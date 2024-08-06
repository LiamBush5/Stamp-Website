export const VIEW_OPTIONS = [2, 4, 8];

export const DEFAULT_VIEW = 4;

export const getGridStyle = (currentView) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${currentView}, minmax(0, 1fr))`,
    gap: '1rem',
    padding: '1rem',
});

export const createViewChangeHandler = (setCurrentView) => (newView) => {
    setCurrentView(Number(newView));
};

export const getMainContentStyle = (isSidebarOpen) =>
    `flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : ''} p-6`;
