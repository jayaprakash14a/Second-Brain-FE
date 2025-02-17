import { Card } from "./Card"

export const BrainContent = ({contents, shared, onDelete}) => {

    return <>
        <div className="flex gap-4 flex-wrap">
            {/* <Card link='https://x.com/Kishoreddyk/status/1890427442872951042' type='twitter' title='Praboss'  /> */}
    
                            {/* <Card link='https://www.youtube.com/watch?v=UaGJdSUA_RM' type='youtube' title='Praboss'  /> */}

            {contents.filter(({ link, title, type }) => link != null && title != null && type != null).map(({ link, title, type, _id }) =>
                <Card key={_id} link={link} title={title} type={type} shared={shared} onDelete={onDelete} _id={_id}/>)
            }

            {/* {JSON.stringify(contents.filter(({link, title, type})=> link != null && title != null && type != null))} */}
        </div>
    </>
}