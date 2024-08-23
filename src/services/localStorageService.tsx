export const saveCSVData = (key: string, data: any) => {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
    } catch (error) {
        console.error('Error saving data to localStorage', error);
    }
};

export const getCSVData = (key: string) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error retrieving data from localStorage', error);
        return null;
    }
};
