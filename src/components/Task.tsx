// import React, {RefObject} from 'react';

// version with Class

// interface Props {
//     index: number;
//     updateTask: (index: number, content: string) => void;
//     deleteTask: (index: number) => void;
//     children: string;
// }
//
// interface State {
//     isEdit: boolean;
// }
//
// class Task extends React.Component <Props, State> {
//     textId: RefObject<HTMLTextAreaElement>;
//
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             isEdit: false
//         };
//         this.textId = React.createRef();
//     }
//
//     handleClickEdit = () => {
//         this.setState({
//             isEdit: true
//         });
//     };
//
//     handleClickRemove = () => {
//         this.props.deleteTask(this.props.index);
//     };
//
//     handleClickSave = () => {
//         const taskName = this.textId.current!.value;
//         this.props.updateTask(this.props.index, taskName);
//         this.setState({isEdit: false});
//     };
//
//     renderView = () => {
//         return (
//             <div className={'box'}>
//                 <div>{this.props.children}</div>
//                 <button onClick={this.handleClickEdit} className={'btn light'}>Edit</button>
//                 <button onClick={this.handleClickRemove} className={'btn red'}>Remove</button>
//             </div>
//         );
//     };
//
//     renderEdit = () => {
//         return (
//             <div className={'box'}>
//                 <textarea ref={this.textId}>New Task</textarea>
//                 <button onClick={this.handleClickSave} className={'btn success'}>Save</button>
//             </div>
//         );
//     };
//
//     render() {
//         return this.state.isEdit ? this.renderEdit() : this.renderView();
//     }
// }
// export default Task;

// version with Function

import {useRef, useState} from 'react';

interface Props {
    index: number;
    updateTask: (index: number, content: string) => void;
    deleteTask: (index: number) => void;
    children: string;
}


const Task = (props: Props) => {

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const textId = useRef<HTMLTextAreaElement | null>(null);

    const handleClickEdit = () => {
        setIsEdit(true);
    };

    const handleClickRemove = () => {
        props.deleteTask(props.index);
    };

    const handleClickSave = () => {
        const taskName = textId.current!.value;
        props.updateTask(props.index, taskName);
        setIsEdit(false);
    };

    const renderView = () => {
        return (
            <div className={'box'}>
                <div>{props.children}</div>
                <button onClick={handleClickEdit} className={'btn light'}>Edit</button>
                <button onClick={handleClickRemove} className={'btn red'}>Remove</button>
            </div>
        );
    };

    const renderEdit = () => {
        return (
            <div className={'box'}>
                <textarea ref={textId}>New Task</textarea>
                <button onClick={handleClickSave} className={'btn success'}>Save</button>
            </div>
        );
    };


    return isEdit ? renderEdit() : renderView();

};

export default Task;