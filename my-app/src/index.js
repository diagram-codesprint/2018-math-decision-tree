import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var props = {
    onClick: "",
    value: ""
}

var studentId = "1";

var studentList = [
    {
        "name": "Rebecca",
        "id": "1",
        "skills": [{
            "id": "1",
            "status": "1"
        }]
    }, {
        "name": "Clayton",
        "id": "2",
        "skills": [{
            "id": "1",
            "status": "1"
        }]
    }, {
        "name": "Beth",
        "id": "3",
        "skills": [{
            "id": "1",
            "status": "1"
        }]
    }, {
        "name": "Austin",
        "id": "4",
        "skills": [{
            "id": "1",
            "status": "1"
        }]
    }
];

var skillsList = [
    {
        "name": "Add",
        "id": "1",
        "no": "1",
        "yes": "2"
    }, {
        "name": "Subtract",
        "id": "2",
        "no": "1",
        "yes": "2"
    }, {
        "name": "Negative",
        "id": "3",
        "no": "1",
        "yes": "2"
    }, {
        "name": "Multiply",
        "id": "4",
        "no": "1",
        "yes": "2"
    }
];

function getSkillById(id) {
    return skillsList.map((skill) => skill.id === id);
};

class Skill extends React.Component {
    render() {
        return (
            <button className="skill" onClick={props.onClick}>
                {props.value}
            </button>
        );
    }
}

class StudentView extends React.Component {
    getStudentById(id) {
        for (var i = 0; i < studentList.length; i++) {
            console.log(studentList[i]);
            if (studentList[i].id === id) {
                console.log("Returning " + i);
                return studentList[i];
            }
        }
        return "1";
    }
    render() {
        const student = this.getStudentById(studentId);
        const skillsList = student.skills;
        const listItems = skillsList.map((skill) =>
            <li key={skill.id}>{skill.id}</li>
        );
        const tableRows = skillsList.map((skill) =>
            <tr key={skill.id}><td>{skill.id}</td><td>{skill.status}</td><td><button>Resume</button></td></tr>
        );
        return (
            <div>
                <h1> {student.name}</h1>
                <h2> Skills </h2>
                <table>
                    <tbody>
                    <tr>
                        <th>Skill Name</th>
                        <th>Status</th>
                        <th>Resume</th>
                    </tr>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Student extends React.Component {
    renderStudentStatus(student) {
        console.log(student.name);
        studentId = student.id;
        ReactDOM.render(<StudentView />, document.getElementById("root"));
    }

    renderResumeNode(i) {
        return (
            <Skill
                value={this.props.value[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const key = this.props.student;
        return (
            <div >
                <button
                    onClick={() => this.renderStudentStatus(key)}>
                    {this.props.student.name}</button>
            </div>
        );
    }
}

class Intro extends React.Component {

    renderStudent(i) {
        return (
            <Student
                student={studentList[i]}
            />
        );
    }
    render() {
        return (
            <div>
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script> */}
                <h1>Math Decision Tree</h1>
                <p>Automated Teacher-led Student Assessment for Multi-Sensory Math</p>
                <h3>Students</h3>
                <ul>
                    <li>
                        {this.renderStudent(0)}
                    </li>
                    <li>
                        {this.renderStudent(1)}
                    </li>
                    <li>
                        {this.renderStudent(2)}
                    </li>
                    <li>
                        {this.renderStudent(3)}
                    </li>
                </ul>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Intro />, document.getElementById("root"));

