<template>
    <section>
        <div id="creation__card">
            <div class="creation__cover"></div>
            <div id="creation__details">
                <p id="creation__title">Loading....<a>by Loading...</a></p>
                <div class="tags-list">
                    <div class="tags">Loading...</div>
                    <div class="tags">Loading...</div>
                </div>
                <p id="creation__description">Loading...</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
@media screen and (min-width: 1024px) {
    #creation__card {
        grid-template-columns: 200px 1fr;
    }
}
@media screen and (max-width: 1024px) {
    #creation__card {
        grid-template-columns: 108.75px 1fr;
    }
}
.creation__cover {
  background-image: linear-gradient(-128deg, #b9e4fb 0%, #ffe7f9 100%);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 0.15s;
  overflow: hidden;
  position: relative;
  height: 300px;
}
#creation__description {
    padding-left: 0px;
    display: inline-block;
    width: 100%;
}
#creation__card {
    display: grid;
    background-color: #f1f1f1;
    border-radius: 8px;
}
#creation__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 0;
    padding-left: 0;
    line-height: 1.25;
}
.tags {
    margin: 2px;
    padding: 3px;
    border-radius: 10px;
    text-align: center;
    color: white !important;
    background-color: #a5a5a5;
    float: left;
    outline: #9e9e9e !important; 
    cursor: pointer;
}
.tags:hover, .tags:focus {
    color: white !important;
    background-color: #9e9e9e;
}
.tags-list {
    display: inline;
}
#creation__details {
    margin-left: 10px;
    padding-right: 10px;
}
#creation__title {
    display: block;
}
#creation__title a {
  cursor: pointer;
}
#creation__author {
    font-weight: lighter;
    font-size: 24px;
}
</style>