<template>
  <div
    class="dataTables_info"
    id="searchKeywordTable_info"
    role="status"
    aria-live="polite"
  >
    顯示第 {{ begin }} 至 {{ over }} 項結果，共 {{ this.total }} 項
  </div>
</template>

<script>
  module.exports = {
    props: {
      start: Number,
      end: Number,
      total: Number
    },
    computed: {
      begin() {
        return this.total < this.start ? 0 : this.start;
      },
      over() {
        if (this.total >= this.end) {
          return this.end;
        } else {
          return this.total;
        }
      }
    }
  };
</script>
