import EduSection from './EduSection/EduSection';
import { EduItems } from'./EduItems';

import './Education.scss';

export default function Education() {
    return (
        <section className="education">
            <div className="education-section">
                <div className="eduLogo-container">
                    <div className="eduLogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                            <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                        </svg>
                    </div>
                </div>
                <div className="education-body">
                    <EduSection eduHeader={EduItems[0].eduHeader} 
                                eduCert={EduItems[0].eduCert}
                                eduInstitution={EduItems[0].eduInstitution}
                                eduTimespan={EduItems[0].eduTimespan}
                                eduSummary={EduItems[0].eduSummary} />
                </div>
            </div>
            <div className="education-section">
                <div className="eduLogo-container">
                    <div className="eduLogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                    </div>
                </div>
                <div className="education-body">
                    <EduSection eduHeader={EduItems[1].eduHeader} 
                                eduCert={EduItems[1].eduCert}
                                eduInstitution={EduItems[1].eduInstitution}
                                eduTimespan={EduItems[1].eduTimespan}
                                eduSummary={EduItems[1].eduSummary} />
                </div>
            </div>
            <div className="education-section">
                <div className="eduLogo-container">
                    <div className="eduLogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>
                    </div>
                </div>
                <div className="education-body">
                    <EduSection eduHeader={EduItems[2].eduHeader} 
                                eduCert={EduItems[2].eduCert}
                                eduInstitution={EduItems[2].eduInstitution}
                                eduTimespan={EduItems[2].eduTimespan}
                                eduSummary={EduItems[2].eduSummary} />
                </div>
            </div>
        </section>
    );
}