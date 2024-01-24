import { Todo } from "../services/type";

export function countByKey<T>(collection: T[], key: keyof T) {
    const groupedResult: Record<string, T[]> = collection.reduce((previous, current) => {
        const groupKey = String(current[key]);

        if (!previous[groupKey]) {
            previous[groupKey] = [];
        }

        previous[groupKey].push(current);
        return previous;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any);

    return Object.keys(groupedResult).map((groupKey) => ({
        id: groupKey,
        count: groupedResult[groupKey].length,
    }));
}


export function completedTodos(collection: Todo[], key: keyof Todo) {
    const groupedResult: Record<string, Todo[]> = collection.reduce((previous, current) => {
        const groupKey = String(current[key]);

        if (!previous[groupKey]) {
            previous[groupKey] = [];
        }

        if (current.completed) {
            previous[groupKey].push(current);
        }

        return previous;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any);

    return Object.entries(groupedResult).map(([id, items]) => ({
        id,
        completed: items.filter(item => item.completed).length,
    }));
}

