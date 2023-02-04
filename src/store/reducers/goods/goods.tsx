/**
 * Заглушка, чтобы редакс работал без ошибок
 */
export function createExtraReducers() {

    return {
        ...getAll,
    };

    function getAll() {

        return {
            
        }
        
    }
}