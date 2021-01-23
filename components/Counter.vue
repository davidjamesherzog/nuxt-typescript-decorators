<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
    </div>
    <div>State: {{ counter }}</div>
    <div>Getter: {{ getCounter }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';

const counterModule = namespace('counter');

@Component({
  name: 'Counter'
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private msg!: string;

  @counterModule.State('_count')
  private counter!: number;

  @counterModule.Getter('count')
  private getCounter!: () => number;

  @counterModule.Action
  private add!: () => Promise<void>;

  @counterModule.Action
  private subtract!: () => Promise<void>;
}
</script>
