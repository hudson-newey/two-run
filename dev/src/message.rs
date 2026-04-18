#[op2]
fn op_sum(#[serde] nums: Vec<f64>) -> Result<f64, deno_error::JsErrorBox> {
    Ok(nums.iter().fold(0.0, |a, v| a + v))
}
