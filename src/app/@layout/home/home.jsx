import React from 'react';

// styles
import './home.scss';

export function Home() {
    const pageTitle = 'Hello, friend!';

    return (
        <app-home>
            <div className="jumbotron mt-3">
                <h1 className="display-3">{pageTitle}</h1>

                <p className="lead">This is a training application that is also a test task.</p>

                <hr className="my-4" />

                <p>It uses the capabilities of the popular lib "React".</p>

                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        Learn more about React
                    </a>
                </p>
            </div>
        </app-home>
    );
}
