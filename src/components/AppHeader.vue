<template>
  <div id="app-header" class="header-container">
    <div class="header-container__navigation-bar">
      <div class="header-container__navigation-bar__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="header-container__navigation-bar__text">
        Groups
      </div>
    </div>
    <h1 class="header-container__header-name">Tasks Progress</h1>
    <div class="header-container__user-info">
      Levi Weiss
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped lang="scss">
.header-container {
  background: $orange-linear-gradient;
  border-radius: $small-border-radius;
  font-family: "Comic Sans MS";
  @include flex-row;
  justify-content: space-between;
  align-items: center;

  &__navigation-bar {
    flex: 15%;
    text-align: center;
    @include flex-row;
    justify-content: center;
    align-items: center;
    margin-right: 2%;
    margin-left: 2%;

    &__icon {
      margin-right: 3%;
    }

    &__text {

    }
  }

  &__header-name {
    flex: 70%;
    text-align: center;
    margin-right: 2%;
    margin-left: 2%;
    font-size: $large-font;
  }

  &__user-info {
    flex: 15%;
    text-align: center;
    margin-right: 2%;
    margin-left: 2%;
  }
}

@media not all and (max-width: $tablet) {
  .header-container {
    &__navigation-bar {
      display: none;
    }
  }
}

@media only screen and (max-width: $tablet) {
  .header-container {
    &__navigation-bar {
      font-size: $small-font;
      color: green;
    }

    &__header-name {
      font-size: $medium-large-font;
      color: green;
    }

    &__user-info {
      font-size: $small-font;
      color: green;
    }
  }
}

@media only screen and (max-width: $mobile) {
  .header-container {
    &__navigation-bar {
      font-size: $extra-small-font;
      color: red;
    }

    &__header-name {
      font-size: $small-medium-font;
      color: red;
    }

    &__user-info {
      font-size: $extra-small-font;
      color: red;
    }
  }
}
</style>
