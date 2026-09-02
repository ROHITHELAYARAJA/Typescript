const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
if (year) {
    year.setAttribute("datetime", thisYear.toString());
    year.textContent = thisYear.toString();
}
export {};
