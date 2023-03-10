import request from "axios";

const url = `https://connect.mailerlite.com/api/subscribers`
const headers = {
    Authorization: `Bearer `+process.env.NEXT_PUBLIC_MAILERLITE_API_KEY
}
const req = {
    postMailerLite: (data) => request({ method: 'post', url, headers, data })
} 
export default req
// Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTg0M2IyYTZlNjU0MTlkYWRiYzRmNmM3ZDM0MGE1ZWZhNDE3YjFmYWM4MDRmNGExZWFmMTBjZTMwNWRhMmJiNGIyZGRkOTU5NjI4OTZlYmEiLCJpYXQiOjE2NzY2NDYyMDMuMjc2MjEzLCJuYmYiOjE2NzY2NDYyMDMuMjc2MjE1LCJleHAiOjQ4MzIzMTk4MDMuMjcyMjQsInN1YiI6IjM1OTIzNCIsInNjb3BlcyI6W119.FKshCAo6tU_mj-Pcszp4X8UNsm2CLY5e5WxcTZmCvNumCpvfKE466_NhFvLOKP7UKTOvb6caxYUIHPuAL3QeR_INHvU4V8KRlGGISaF0cU2qWafuSaH8bHo3mO9YmAolnmZzOfGTHWtlSp2xUGahNet1w8pBezNY_WmFFjcmikwOhPgidUjBJO7nUKEzPNOH2-P6rMMI-nRA4ASkjb-sGpdG7x8o5SD-GDPsTsLPRd5lcBfTOrnCtcgBX0oN6UOMitmmW6HvpkcIMb3yChd0Tl3KWsL3eCrmfiauPm3WPUqok-Qt3Jndpi1XKSUHZ4etLMwPQ2HR8mOL83DgpfSTJj4DuGtQf0A38Lq4Jp3FidUk8Cn9viRFZu1Hl52dCJCF65ztSCZVQLo4_1_E0hQZ6U-g1xq-vz-Ig_zvGMCOJd8-4K9uBIeXn0bmYUwk86m8OCE_-cBizKRmzLPRlUlRyc3g_QxyX3SXkoMpv4QetQc92lbDI2n-QtuI7IbNQgYpN599NylB293AlOsxs4Z6ZtnP6PQIQm4CxqIsPKDAAq9ZGiJHab7C7eSwBjV9qqUaBhx7IXlHeshhTpTQt-h136cDgpmzpt7UbUVjzdXNmcPH-UsxQZNXalqyPvLcfhw8_3FYWBfyCysZP7poJUCp1PDqbOv0-qmZLpSNvk1DX4g`