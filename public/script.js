// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM fully loaded and parsed");
//     getALLTestis();
// });

const containerDom = document.querySelector(".container");

const getALLTestis = async () => {
    try {
        let allTestisDto = await axios.get("/api/testimonial");
        let { data } = allTestisDto;
        console.log(allTestisDto);
        
        let allTestis = data.map((testi) => {
            const { name, job_title, comment_title, comment, photo } = testi;
            
            return `
                <div class="card">
                <span>
                    <i class="ri-double-quotes-l"></i>
                </span>
                <h4>${comment_title}</h4>
                <p>
                    ${comment}
                </p>
                <img src="${photo}" alt="user-one">
                <h5>${name}</h5>
                <h6>${job_title}</h6>
                </div>
            `
        })
        .join("");

        containerDom.innerHTML = allTestis;

    } catch (err) {
        console.log(err);
    }
};

getALLTestis();