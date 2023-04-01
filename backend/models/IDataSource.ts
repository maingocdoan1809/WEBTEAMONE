export type DataProperties = {
  username: string;
  password: string;
  database: string;
};
export interface IDataSource<T> {
  insert: (data: T) => boolean;
  delete_temporary: (id: string) => T;
  delete_permanently: (id: string) => T;
  update: (id: string, newData: T) => T;
  find: (id: string) => T;
  filter: (keyword: string) => T;
}
