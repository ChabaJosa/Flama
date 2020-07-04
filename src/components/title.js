import React from 'react'

export default function title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold balloon-background">
                    {name}
                    <br/>
                    <strong className="text-orange balloon-background">{title}</strong>
                </h1>
            </div>
        </div>
    )
}
