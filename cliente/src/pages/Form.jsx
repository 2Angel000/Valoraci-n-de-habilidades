import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import BtnHistory from '../components/btnHistory';

export default function Form() {

 const navigate = useNavigate();
  
 const url = "http://localhost:3000/api";

 const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    number: "",
    email: "",
 });    

 const [saved, setSaved] = useState(false); // Estado para controlar si se guardó el formulario
 const [isSaving, setIsSaving] = useState(false); // Estado para controlar si se está guardando el formulario

 const handleCancel = () => {
    // Lógica para cancelar el formulario
    setFormData({name:"", last_name:"", number:"", email:""});
    setSaved(false); // Resetear el estado saved
 }


 const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        setIsSaving(true); // Iniciar el proceso de guardado
        //solicitud POST 
        const response = await axios.post(url, formData);
        console.log(response);

        const userData = {
          name: response.data.name,
          last_name: response.data.last_name,
          number: response.data.number,
          email: response.data.email
        };
        console.log(userData.name);
        //restablecer formulario
        navigate("/print", { state: { userData } });
        setSaved(true); // Cambiar el estado a true después de guardar
        //setFormData({name:"", last_name:"", number:"", email:""});
    }catch(error){
        console.error("ERROR. No se agregó la persona:", error);
    } finally {
        setIsSaving(false); // Finalizar el proceso de guardado
    }
 }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 m-14">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Formulario
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Por favor, rellene los campos con sus respectivos datos.
            </p>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Información Personal
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Revise cuidadosamente cada campo a rellenar
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    value={formData.name} // Vincular al valor del estado formData.name
                    onChange={handleChange} // Manejar cambios en el estado
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo Electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Número de telefono
                </label>
                <div className="mt-2">
                <input
                  type="text"
                  name="number"
                  id="number"
                  value={formData.number}
                    onChange={handleChange}
                  maxLength={10} // Acepta solo 10 dígitos
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 mr-10">
          {saved ? (
            <BtnHistory userData={formData} /> // Pasar savedRecord como props a BtnHistory
            ) : (
            <>
              <button
                type="submit"
                disabled={isSaving} 
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSaving ? 'Guardando...' : 'Save'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
