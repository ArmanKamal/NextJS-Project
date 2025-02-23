'use client'
import { createSnippet } from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage(){

    const [formState, action] = useFormState(createSnippet,{ message: ''})


    return (
        <form action={action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        className="border rounded p-2 w-full"
                        id="title"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                        name="code"
                        className="border rounded p-2 w-full"
                        id="code"
                    />
                </div>
            </div>
            <button type="submit" className="rounded p-2 bg-blue-200 mt-2">Create</button> 
            {formState.message ? <div className='my-2 p-2 bg-red-200 rounded border-red-400'>{formState.message}</div>: null}
        </form>
    )
}