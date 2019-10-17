import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="page-footer" style={{backgroundColor: "teal", zIndex:999}}>
                    <h2>This is the footer</h2>
                </footer>
            </div>
        );
    }
}

export default Footer
