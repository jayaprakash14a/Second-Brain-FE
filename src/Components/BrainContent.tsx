import { ContentsModel } from "../interface"
import { Card } from "./Card"


export const BrainContent = (props : ContentsModel) => {

    return <>
        <div className="flex gap-4 flex-wrap">
            {/* <Card link='https://x.com/Kishoreddyk/status/1890427442872951042' type='twitter' title='Praboss'  /> */}
    
                            {/* <Card link='https://www.youtube.com/watch?v=UaGJdSUA_RM' type='youtube' title='Praboss'  /> */}

            {props.contents.filter(({ link, title, type }) => link != null && title != null && type != null).map(({ link, title, type, _id }) =>
                <Card key={_id + 'key'} link={link} title={title} type={type} shared={props.shared} onDelete={props.onDelete} _id={_id}/>)
            }

            {JSON.stringify(props.contents.filter(({link, title, type})=> link != null && title != null && type != null))}
        </div>
    </>
}