var resumeForm = document.getElementById("resumeForm");
var resumePreview = document.getElementById("resumePreview");
var profileInput = document.getElementById("profile");
function updateResume(data) {
    var profileImageTag = data.profileImage
        ? "<img src=\"".concat(data.profileImage, "\" alt=\"Profile Image\" class=\"profile-img\">")
        : '';
    resumePreview.innerHTML = "\n        <div class=\"resume\">\n            ".concat(profileImageTag, "\n            <h2>").concat(data.name, "</h2>\n            <p>Email: ").concat(data.email, "</p>\n            <p>Phone: ").concat(data.phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(data.education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        </div>\n    ");
}
// Handle form input events
resumeForm.addEventListener("input", function (event) {
    var _a, _b, _c, _d, _e, _f, _g;
    var formData = new FormData(resumeForm);
    var profileFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    if (profileFile) {
        reader.readAsDataURL(profileFile);
        reader.onloadend = function () {
            var _a, _b, _c, _d, _e, _f;
            var resumeData = {
                name: ((_a = formData.get("name")) === null || _a === void 0 ? void 0 : _a.toString()) || "",
                email: ((_b = formData.get("email")) === null || _b === void 0 ? void 0 : _b.toString()) || "",
                phone: ((_c = formData.get("phone")) === null || _c === void 0 ? void 0 : _c.toString()) || "",
                education: ((_d = formData.get("education")) === null || _d === void 0 ? void 0 : _d.toString()) || "",
                experience: ((_e = formData.get("experience")) === null || _e === void 0 ? void 0 : _e.toString()) || "",
                skills: ((_f = formData.get("skills")) === null || _f === void 0 ? void 0 : _f.toString()) || "",
                profileImage: reader.result || ""
            };
            updateResume(resumeData);
        };
    }
    else {
        var resumeData = {
            name: ((_b = formData.get("name")) === null || _b === void 0 ? void 0 : _b.toString()) || "",
            email: ((_c = formData.get("email")) === null || _c === void 0 ? void 0 : _c.toString()) || "",
            phone: ((_d = formData.get("phone")) === null || _d === void 0 ? void 0 : _d.toString()) || "",
            education: ((_e = formData.get("education")) === null || _e === void 0 ? void 0 : _e.toString()) || "",
            experience: ((_f = formData.get("experience")) === null || _f === void 0 ? void 0 : _f.toString()) || "",
            skills: ((_g = formData.get("skills")) === null || _g === void 0 ? void 0 : _g.toString()) || ""
        };
        updateResume(resumeData);
    }
});
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Resume generated!");
});
