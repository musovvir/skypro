import React, { ChangeEvent } from 'react';
import cls from './Sort.module.scss'

interface SortProps<T extends string> {
    value: string;
    onChange: (value: T) => void;
}

const Sort = (<T extends string>({ onChange, value}: SortProps<T>) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as T);
    };

    return (
            <div className={cls.sortWrapper}>
                <div className={cls.sort}>
                    <select className={cls.select} name="cars" id="cars" onChange={onChangeHandler}>
                        <option
                            value="cheaper"
                        >
                            Порядок: сперва дешевле
                        </option>
                        <option
                            value="expensive"
                        >
                            Порядок: сперва дороже
                        </option>
                    </select>
                </div>
            </div>
    );
});

export default Sort;
