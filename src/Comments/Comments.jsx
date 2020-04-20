import React from 'react';
import _ from 'lodash';
import './styles.scss';


class Comments extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            show: "show"
        };

    }
    handleClick = () => {
        this.state.show == "show" ? this.setState({ show: "hidden" }) : this.setState({ show: "show" }) ;
        }

    render() {
        const show = this.state.show;
        return (
            <div className="comments">
            <button type='button' onClick={this.handleClick}>Нажми меня, я поменяю SHOW</button>
            {_.map(this.props.data, function (item){
                return (
                    <div>
                        <p>postId: {item.postId}</p>
                        <p>id: {item.id}</p>
                        <p>name: {item.name}</p>
                        <p>email: {item.email}</p>
                        <p>body: {item.body}</p>
                        <p>SHOW: {show}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Comments;

