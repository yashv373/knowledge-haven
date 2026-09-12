# Combinational Logic

This page demonstrates how a typical chapter notes page will look. 
You literally just write Markdown, and it formats beautifully on the web.

## Example: A simple 2-to-1 Multiplexer

In digital design, a multiplexer (MUX) selects between several input signals and forwards the selected input into a single line.

Here is the Verilog code for a 2-to-1 MUX:

```verilog
module mux2 (
    input  logic d0, d1,
    input  logic s,
    output logic y
);

    assign y = s ? d1 : d0;

endmodule
```

Notice how the syntax highlighting is flawless. You didn't have to write any CSS for this!

## HDLBits Progress

- [x] Vector0
- [x] Vector1
- [ ] Mux256to1v
