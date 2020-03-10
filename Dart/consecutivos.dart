import 'dart:math';

void main(List<String> arguments) {
  print(solution('23577678'));
}

int solution(String digits) {
  var temp = 0;
  for (var i = 0; i < digits.length - 4; i++) {
    int dos = int.parse(digits.substring(i, i + 5));
    temp = temp < dos ? dos : temp;
  }

  return temp;
// ==============================================
  return digits.length <= 5
      ? int.parse(digits)
      : max(int.parse(digits.substring(0, 4)), solution(digits.substring(1)));
}
