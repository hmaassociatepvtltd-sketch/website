import {tinaField} from "tinacms/dist/react";

export const Spacer = (props) => {
    return (
        <div style={{
            height: `${props.height}px`
        }} data-tina-field={tinaField(props, "height")} className={`h-full ${props.backgroundColor === 'white' ? '' : 'bg-secondary-background'}`}>

        </div>
    )
}