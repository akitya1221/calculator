var budget = {Result:0};

    var purposeapp = new Vue ({
        el: '#budget',
        data: budget,
        methods: {
          //ボタンが押された時の処理
          rate: function(){
            var earnings = Number(this.$refs.earningsMoney.value); 
            var weekBudget = Number(this.$refs.weekMoney.value); 
            budget.Result = earnings / weekBudget * 100;
            budget.Result = Math.floor(budget.Result);

            console.log(budget.Result);
          }
        }
    })

var isum = {itemResult:0};

var itemapp = new Vue ({
      el: '#items',
      data: isum,
      methods: {
        //ボタンが押された時の処理
        itemSum: function(){
          var item1 = Number(this.$refs.i1.value); 
          var item2 = Number(this.$refs.i2.value); 
          var item3 = Number(this.$refs.i3.value); 
          var item4 = Number(this.$refs.i4.value); 
          var item5 = Number(this.$refs.i5.value); 
          var item6 = Number(this.$refs.i6.value); 
          isum.itemResult = item1 + item2 + item3 + item4 + item5 + item6; //足した結果を画面に表示する

          console.log(isum.itemResult);
        }
      }
    })

var psum = {purposeResult:0};

    var purposeapp = new Vue ({
        el: '#purpose',
        data: psum,
        methods: {
          //ボタンが押された時の処理
          purposeSum: function(){
            var purpose1 = Number(this.$refs.p1.value); 
            var purpose2 = Number(this.$refs.p2.value); 
            var purpose3 = Number(this.$refs.p3.value); 
            psum.purposeResult = purpose1 + purpose2 + purpose3; //足した結果を画面に表示する

            console.log(psum.purposeResult);
          }
        }
    })