import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import HealthCardPage from "./pages/HealthCardPage";
import PsychiatristSearchPage from "./pages/PsychiatristSearchPage";
import AppointmentPage from "./pages/AppointmentPage";
import EmotionTrackerPage from "./pages/EmotionTrackerPage";
import ResourcesPage from "./pages/ResourcesPage";
import MedicationPage from "./pages/MedicationPage";
import LoginScreen from "./pages/LoginScreen";
import DoctorSignup from './pages/DoctorSignupPage.js';
import PatientSignup from './pages/PatientSignupPage';
import PsychiatristProfilePage from "./pages/PsychiatristProfilePage";

function AppRouter() {
    const [iamPatient, setIamPatient] = useState(null);
    const [loginScreen, setLoginScreen] = useState(true);


    if (loginScreen) {
        return (
            <Router>
                <Routes>
                <Route path="/" element={<LoginScreen setIamPatient={setIamPatient} setLoginScreen={setLoginScreen}/>} />
                <Route path="/signup/doctor" element={<DoctorSignup />} />
                <Route path="/signup/patient" element={<PatientSignup setIamPatient={setIamPatient} />} />
                </Routes>
            </Router>
        );
    } else if (iamPatient !== null)
    {
        return (
            <Router>
                <NavBar iamPatient={iamPatient}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {iamPatient ? (
                        <>
                            <Route path="/Search" element={<PsychiatristSearchPage />} />
                            <Route path="/Appointments" element={<AppointmentPage />} />
                            <Route path="/EmotionTracker" element={<EmotionTrackerPage />} />
                            <Route path="/resources" element={<ResourcesPage />} />
                            <Route path="/Medication" element={<MedicationPage />} />
                        </>
                    ) : (
                        <>
                            <Route path="/HealthCard" element={<HealthCardPage />} />
                            <Route path="/Profile" element={<PsychiatristProfilePage />} />
                        </>
                    )}
                </Routes>
            </Router>
        );
    }
}

export default AppRouter;
