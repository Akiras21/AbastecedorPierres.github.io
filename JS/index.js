
const add = document.getElementById("agregar")
    
    add.addEventListener("click", () => {
        const checkbox = document.getElementById("impuestoinp");

        const i1 = document.getElementById("codigoinp").value
        const i2 = document.getElementById("descripcioninp").value
        const i3 = document.getElementById("marca").value
        const i4 = document.getElementById("costoinp").value

        const t1 = document.getElementById("t1")
        const t2 = document.getElementById("t2")
        const t3 = document.getElementById("t3")
        const t4 = document.getElementById("t4")
        const t5 = document.getElementById("t5")

        const e1 = document.getElementById("e1")
        const e2 = document.getElementById("e2")
        const e3 = document.getElementById("e3")
        const e4 = document.getElementById("e4")
        const e5 = document.getElementById("e5")

        const x1 = document.getElementById("x1")
        const x2 = document.getElementById("x2")
        const x3 = document.getElementById("x3")
        const x4 = document.getElementById("x4")
        const x5 = document.getElementById("x5")

        const y1 = document.getElementById("y1")
        const y2 = document.getElementById("y2")
        const y3 = document.getElementById("y3")
        const y4 = document.getElementById("y4")
        const y5 = document.getElementById("y5")

        const s1 = document.getElementById("s1")
        const s2 = document.getElementById("s2")
        const s3 = document.getElementById("s3")
        const s4 = document.getElementById("s4")
        const s5 = document.getElementById("s5")
        if (i1 && i2 && i3 && i4) {
            if (t1.style.display === "none" && t2.style.display === "none" && t3.style.display === "none" && t4.style.display === "none" && t5.style.display === "none") {
                t1.style.display = 'block'
                t1.textContent = i1

                t2.style.display = 'block'
                t2.textContent = i2

                t3.style.display = 'block'
                t3.textContent = i3

                t4.style.display = 'block'
                t4.textContent = i4

                t5.style.display = 'block'
                t5.textContent = checkbox.checked ? "13% IVA" : "Sin impuesto"
            } else if (e1.style.display === "none" && e2.style.display === "none" && e3.style.display === "none" && e4.style.display === "none" && e5.style.display === "none") {
                e1.style.display = 'block'
                e1.textContent = i1

                e2.style.display = 'block'
                e2.textContent = i2

                e3.style.display = 'block'
                e3.textContent = i3

                e4.style.display = 'block'
                e4.textContent = i4

                e5.style.display = 'block'
                e5.textContent = parseInt(i1) + parseInt(i2) + parseInt(i3) + parseInt(i4)
            } else if (x1.style.display === "none" && x2.style.display === "none" && x3.style.display === "none" && x4.style.display === "none" && x5.style.display === "none") {
                x1.style.display = 'block'
                x1.textContent = i1

                x2.style.display = 'block'
                x2.textContent = i2

                x3.style.display = 'block'
                x3.textContent = i3

                x4.style.display = 'block'
                x4.textContent = i4

                x5.style.display = 'block'
                x5.textContent = parseInt(i1) + parseInt(i2) + parseInt(i3) + parseInt(i4)
            }
            else if (s1.style.display === "none" && s2.style.display === "none" && s3.style.display === "none" && s4.style.display === "none" && s5.style.display === "none") {
                s1.style.display = 'block'
                s1.textContent = i1

                s2.style.display = 'block'
                s2.textContent = i2

                s3.style.display = 'block'
                s3.textContent = i3

                s4.style.display = 'block'
                s4.textContent = i4

                s5.style.display = 'block'
                s5.textContent = parseInt(i1) + parseInt(i2) + parseInt(i3) + parseInt(i4)
            }
            else if (y1.style.display === "none" && y2.style.display === "none" && y3.style.display === "none" && y3.style.display === "none" && y5.style.display === "none") {
                y1.style.display = 'block'
                y1.textContent = i1

                y2.style.display = 'block'
                y2.textContent = i2

                y3.style.display = 'block'
                y3.textContent = i3

                y4.style.display = 'block'
                y4.textContent = i4

                y5.style.display = 'block'
                y5.textContent = parseInt(i1) + parseInt(i2) + parseInt(i3) + parseInt(i4)
            }
        }
        const dele = document.getElementById("dele")

        dele.addEventListener('click', () => {
            t1.textContent = ""
            t1.style.display = "none"
            t2.textContent = ""
            t2.style.display = "none"
            t3.textContent = ""
            t3.style.display = "none"
            t4.textContent = ""
            t4.style.display = "none"
            t5.textContent = ""
            t5.style.display = "none"


            e1.textContent = ""
            e1.style.display = "none"
            e2.textContent = ""
            e2.style.display = "none"
            e3.textContent = ""
            e3.style.display = "none"
            e4.textContent = ""
            e4.style.display = "none"
            e5.textContent = ""
            e5.style.display = "none"


            s1.textContent = ""
            s1.style.display = "none"
            s2.textContent = ""
            s2.style.display = "none"
            s3.textContent = ""
            s3.style.display = "none"
            s4.textContent = ""
            s4.style.display = "none"
            s5.textContent = ""
            s5.style.display = "none"

            x1.textContent = ""
            x1.style.display = "none"
            x2.textContent = ""
            x2.style.display = "none"
            x3.textContent = ""
            x3.style.display = "none"
            x4.textContent = ""
            x4.style.display = "none"
            x5.textContent = ""
            x5.style.display = "none"

            y1.textContent = ""
            y1.style.display =  "none"
            y2.textContent = ""
            y2.style.display = "none"
            y3.textContent = ""
            y3.style.display = "none"
            y4.textContent = ""
            y4.style.display = "none"
            y5.textContent = ""
            y5.style.display = "none"
        })
    })  
