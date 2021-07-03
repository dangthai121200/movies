import React from 'react';

const Loading = ({message}) => {
    return (
        <div class="ui active dimmer" style={{height:'800px'}}>
            <div class="ui text loader">{message}</div>
        </div>
    )
};
Loading.defaultProps={
    message:'Loading...'
}
export default Loading