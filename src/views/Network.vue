<template>

      <network id="mynetwork" ref="network" :nodes="nodes" :edges="edges" :options="options"></network>

</template>

<script>


export default {
  name: "NetworkView",
  data() {
    return {
      nodes: [
        { id: 1, label: "circle", shape: "circle" },
        { id: 2, label: "ellipse", shape: "ellipse" },
        { id: 3, label: "database", shape: "database" },
        { id: 4, label: "box", shape: "box" },
        { id: 5, label: "diamond", shape: "diamond" },
        { id: 6, label: "dot", shape: "dot" },
        { id: 7, label: "square", shape: "square" },
        { id: 8, label: "triangle", shape: "triangle" },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 5, to: 6 },
        { from: 5, to: 7 },
        { from: 6, to: 8 },
      ],
      options: {
        nodes: {
          borderWidth: 4,
        },
        edges: {
          color: "lightgray",
        },
      },
          size: 30,
    font: {
      size: 32,
    },
    borderWidth: 2,
    shadow: true,
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss">

#mynetwork {
    margin: 0 auto;
  max-width: calc(100vw - 70%);
  height: calc(100vh - 50%);
  border: 1px solid #444444;

}

</style>
