export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

   /*  created: function() {
        console.log(message);
    }, */

    template: `
    <div @click="showmydata" class="bio-panel">
        <div class="p_avatar">
            <img :src='"images/" + piece.biopic' alt="piece.name">
        </div>

        <h2 class="p_name">{{ piece.name }}</h2>
        <h3 class="p_role">{{ piece.role }}</h3>
    </div>
    `,
   /*  data: function () {
        return {
            message: " I am a component",
            isVisible: false
        }
    }, */

    methods : {
       /*  showMe() {
            this.isVisible = true;
        } */
        showmydata() {
            debugger;
            this.$emit("showdata", this.piece);
        }
    }
}