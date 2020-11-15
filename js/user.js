const showSettingView = document.querySelector(".show_setting");
let isShow = false;
showSettingView.addEventListener("click", (e) => {
    switch (isShow) {
        case false:
            document
                .querySelector(".option_details")
                .classList.add("show_setting-info");
            isShow = true;
            break;

        default:
            document
                .querySelector(".option_details")
                .classList.remove("show_setting-info");
            isShow = false;
            break;
    }
});

$(".cb_no").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_no").addClass("hidden");
        $(".td_no").addClass("hidden");
    } else {
        $(".th_no").removeClass("hidden");
        $(".td_no").removeClass("hidden");
    }
});
$(".cb_img").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_img").addClass("hidden");
        $(".td_img").addClass("hidden");
    } else {
        $(".th_img").removeClass("hidden");
        $(".td_img").removeClass("hidden");
    }
});
$(".cb_name").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_name").addClass("hidden");
        $(".td_name").addClass("hidden");
    } else {
        $(".th_name").removeClass("hidden");
        $(".td_name").removeClass("hidden");
    }
});
$(".cb_usergroup").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_usergroup").addClass("hidden");
        $(".td_usergroup").addClass("hidden");
    } else {
        $(".th_usergroup").removeClass("hidden");
        $(".td_usergroup").removeClass("hidden");
    }
});
$(".cb_email").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_email").addClass("hidden");
        $(".td_email").addClass("hidden");
    } else {
        $(".th_email").removeClass("hidden");
        $(".td_email").removeClass("hidden");
    }
});
$(".cb_date-created").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_date-created").addClass("hidden");
        $(".td_date-created").addClass("hidden");
    } else {
        $(".th_date-created").removeClass("hidden");
        $(".td_date-created").removeClass("hidden");
    }
});
$(".cb_action").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_action").addClass("hidden");
        $(".td_action").addClass("hidden");
    } else {
        $(".th_action").removeClass("hidden");
        $(".td_action").removeClass("hidden");
    }
});
$(".cb_user-status").on("click", (e) => {
    if (!e.target.checked) {
        $(".th_user-status").addClass("hidden");
        $(".td_user-status").addClass("hidden");
    } else {
        $(".th_user-status").removeClass("hidden");
        $(".td_user-status").removeClass("hidden");
    }
});
