document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('predictBtn').addEventListener('click', function ()
    {
        if (document.getElementById('nameInput').value.trim() === '') {
            alert('Please enter a name.');
        }
        else
        {
            
        const name = document.getElementById('nameInput').value; 
        fetch('https://api.genderize.io?name=' + name)
        .then(response => response.json())
        .then(response => { 
            const gender = response.gender;
            document.getElementById('genderResult').querySelector('strong').nextSibling.nodeValue = " " + gender;
        })
        .catch(() => {
            alert('Something went wrong. Please try again later.');
        });
    
        fetch('https://api.agify.io?name=' + name)
        .then(response => response.json())
        .then(response => { 
            const age = response.age;
            document.getElementById('ageResult').querySelector('strong').nextSibling.nodeValue = " " + age;
        })
        .catch(() => {
            alert('Something went wrong. Please try again later.');
        });

        fetch('https://api.nationalize.io?name=' + name)
        .then(response => response.json())
        .then(response => { 
            const nationality = response.country[0].country_id;
            document.getElementById('nationalityResult').querySelector('strong').nextSibling.nodeValue = " " + nationality;
        })
        .catch(error => {
            alert('Something went wrong. Please try again later.');
        });
        }
    });
})
