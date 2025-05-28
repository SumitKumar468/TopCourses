import React from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {filterData , apiUrl} from './data.js';
import { useState , useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from './components/Spinner.js';

const App = () => {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [catagory , setCatagory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
  
      setCourses(output.data);
  
    }
    catch(error){
      toast.error('Network Call ma koi dikkat hai');
    }

    setLoading(false);
  }

  // jaise he compoent render hoga dom ma uska execute hoga useEffect.
  useEffect( () => {
    fetchData();
  },[])

  return (
    <div className="topCourse-desc">

      <div>
        <Navbar/>
      </div>

      <div>
        <div>
          <Filter filterData = {filterData}
          catagory = {catagory}
          setCatagory = {setCatagory}
          />
        </div>

        <div>
          {
            loading ? (<Spinner/>) : (<Cards courses = {courses} catagory = {catagory}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
