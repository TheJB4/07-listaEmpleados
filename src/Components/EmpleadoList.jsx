import { useState } from "react"
import EmpleadoAvatar from "./EmpleadoAvatar"
import EmpleadoRow from "./EmpleadoRow"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmpleadoList() {
    let [empleados, setEmpleados] = useState([
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "😀" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "😁" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "🤣" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "😃" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "😎" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "🤖" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "🐶" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "👪" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "🥰" },
    ]
    )

    return (
        <>
            <div>
                {empleados.map(empleado => (
                    <div className="d-flex justify-content-center">
                        <div>
                            <EmpleadoAvatar pic={empleado.pic}></EmpleadoAvatar>
                            <EmpleadoRow title={empleado.title} department={empleado.department}></EmpleadoRow>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}