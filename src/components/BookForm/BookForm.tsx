import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, 
    chooseAuthor, 
    chooseIllustrator, 
    chooseNarrator, 
    chooseProduct, 
    chooseIsbn10, 
    chooseIsbn13, 
    choosePublisher, 
    chooseYearmd } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface BookFormProps {
    id?: string;
    data?:{}
}

interface BookState {
    title: string;
    author: string;
    illustrator: string;
    narrator: string;
    product: string;
    isbn10: string;
    inbn13: string;
    publisher: string;
    yearnmd: string;
}

export const BookForm = (props:BookFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const title = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        if(props.id!) {
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseTitle(data.title))
            dispatch(chooseAuthor(data.author))
            dispatch(chooseIllustrator(data.illustrator))
            dispatch(chooseNarrator(data.narrator))
            dispatch(chooseProduct(data.product))
            dispatch(chooseIsbn10(data.isbn10))
            dispatch(chooseIsbn13(data.isbn13))
            dispatch(choosePublisher(data.publisher))
            dispatch(chooseYearmd(data.yearmd))
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Book Title</label>
                    <Input {...register('title')} name="title" placeholder="Title" />
                </div>

                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder="Author" />
                </div>

                <div>
                    <label htmlFor="illustrator">Illustrator</label>
                    <Input {...register('illustrator')} name="illustrator" placeholder="Illustrator" />
                </div>

                <div>
                    <label htmlFor="narrator">Narrator</label>
                    <Input {...register('narrator')} name="narrator" placeholder="Narrator" />
                </div>

                <div>
                    <label htmlFor="product">Product</label>
                    <Input {...register('product')} name="product" placeholder="Product" />
                </div>

                <div>
                    <label htmlFor="isbn10">ISBN-10</label>
                    <Input {...register('isbn10')} name="isbn10" placeholder="ISBN-10" />
                </div>

                <div>
                    <label htmlFor="isbn13">ISBN-13</label>
                    <Input {...register('isbn13')} name="isbn13" placeholder="ISBN-13" />
                </div>

                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <Input {...register('publisher')} name="publisher" placeholder="Publisher" />
                </div>

                <div>
                    <label htmlFor="yearmd">Publish Date</label>
                    <Input {...register('yearmd')} name="yearmd" placeholder="Publish Date" />
                </div>

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}