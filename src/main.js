import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";
// import { pingPong } from './businesslogic'; // import the export function from businesslogic.js
// import './styles.css'; // brings over styles.css

$(document).ready(function () {
  $("insertformandclassorid").submit(function (event) {
    event.preventDefault();
  });
});
