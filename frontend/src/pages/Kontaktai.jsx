export default function Kontaktai() {
    return (
        <div className='bg-gradient-to-b from-gray-300 to-gray-500 rounded-md'>
            <h1 className='text-3xl text-center pt-10 mb-5'>Kontaktai ir darbo laikas</h1>
            <hr />
            <h4 className="text-center mt-5 mb-5">

                Valstybinių <b>švenčių dienomis </b> 
                ir <b> sekmadieniais</b> nedirbame

            </h4>
            <hr />
            <div className="table-container flex justify-center ">
                <table className="mt-5 mb-5">
                    <tbody>
                        <tr>
                            <th>Adresas</th>
                            <td><strong><a 
                            href="https://www.google.com/maps/place/%C5%BDirg%C5%B3+g.+27,+96342+Dercekliai/@55.5593819,21.3116217,17z/data=!3m1!4b1!4m5!3m4!1s0x46e4e8d00d29b731:0xc48d66d97f3d68a2!8m2!3d55.5593819!4d21.3141966?entry=ttu"
                            className="text-sky-800 hover:text-sky-600"
                            >Žirgų g. 27</a></strong></td>
                        </tr>
                        <tr>
                            <th>Darbo laikas</th>
                            <td>I-V (7-18) ; VI (9-17)</td>
                        </tr>
                        <tr>
                            <th>Tel.</th>
                            <td>+3701234567</td>
                        </tr>
                        <tr>
                            <th>El. paštas</th>
                            <td>jgintare01@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}