import React from "react";

class Product extends React.Component {

    constructor(props) {                              //we want to bind custom component methods to the react component class
        super(props)
        this.handleUpVote = this.handleUpVote.bind(this)
    }
    handleUpVote() {
        this.props.onVote(this.props.id)    //without constructor fucntion this will give error as "this is undefined" 
    }
    
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        />
                    </div>
                    <button onClick={this.handleUpVote}>
                        <i className='large caret up icon' />up vote
                    </button>
                </div>
            </div>
        );
    }
}


export default Product