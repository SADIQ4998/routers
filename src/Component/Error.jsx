// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return(
    <div>
    <h3>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</h3>
    <br></br>
    <h6>In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.

While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.

In this comprehensive guide, we will explore the various non-coding jobs in cybersecurity, the skills required for each role, and how to pursue a career in this exciting field.</h6>
<button onClick={()=>navigate("/")}> go to home page</button>
  </div>
  )
}
export default Error;