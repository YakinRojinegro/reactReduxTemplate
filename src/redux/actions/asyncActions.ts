import axios from 'axios';
import { clean, setFoo, setBar } from '../slices/fooSlice'

export const fetchData = (data: any) => {
    return async (dispatch: Function) => {
        dispatch(clean());
        try {
            const dataReq = await axios.post('URL', { data });
            const foo = dataReq.data;
            dispatch(setFoo(foo));
        } catch (err) {
            //Do something
        }
    }
}