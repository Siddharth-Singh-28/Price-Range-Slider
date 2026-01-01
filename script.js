$(document).ready(function () {

    const MIN_LIMIT = 1000;
    const MAX_LIMIT = 10000;

    $("#minInput, #maxInput")
        .on("focus", function () {
            $(this).data("prev", $(this).val());
        })
        .on("input", function () {
            const minVal = $("#minInput").val();
            const maxVal = $("#maxInput").val();

            if (minVal !== "") $("#minRange").val(minVal);
            if (maxVal !== "") $("#maxRange").val(maxVal);
        })
        .on("change", function () {
            let min = +$("#minInput").val();
            let max = +$("#maxInput").val();
            const id = $(this).attr("id");

            if ($(this).val() === "") {
                $(this).val($(this).data("prev"));
                return;
            }

            if (id === "minInput" && min < MIN_LIMIT) {
                alert("Minimum price cannot be less than 1000");
                $(this).val($(this).data("prev"));
                return;
            }

            if (id === "maxInput" && max > MAX_LIMIT) {
                alert("Maximum price cannot be more than 10000");
                $(this).val($(this).data("prev"));
                return;
            }

            if (id === "minInput" && min > max) {
                alert("Minimum price cannot be greater than Maximum price");
                $(this).val($(this).data("prev"));
                return;
            }

            if (id === "maxInput" && max < min) {
                alert("Maximum price cannot be less than Minimum price");
                $(this).val($(this).data("prev"));
                return;
            }

            $("#minRange").val(min);
            $("#maxRange").val(max);
        });

    $("#minRange, #maxRange")
        .on("mousedown touchstart", function () {
            $(this).data("prev", $(this).val());
        })
        .on("input", function () {
            let min = +$("#minRange").val();
            let max = +$("#maxRange").val();
            const id = $(this).attr("id");

            if (id === "minRange" && min > max) {
                $("#minRange").val(max);
                min = max;
            }

            if (id === "maxRange" && max < min) {
                $("#maxRange").val(min);
                max = min;
            }

            $("#minInput").val(min);
            $("#maxInput").val(max);
        })
        .on("change", function () {
            let min = +$("#minRange").val();
            let max = +$("#maxRange").val();

            if (min < MIN_LIMIT) min = MIN_LIMIT;
            if (max > MAX_LIMIT) max = MAX_LIMIT;

            $("#minRange").val(min);
            $("#maxRange").val(max);
            $("#minInput").val(min);
            $("#maxInput").val(max);
        });

});
