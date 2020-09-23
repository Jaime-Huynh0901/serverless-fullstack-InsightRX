
const company = {
    default: 'Nova'
};

//this function will update the default company. 
function setCompany(newCompany){
    return company.default = newCompany;
};

export { company, setCompany};
