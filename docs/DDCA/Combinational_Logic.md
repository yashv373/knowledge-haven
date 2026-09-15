<span class="ch-label">Chapter 2 · Harris & Harris</span>
# Combinational Logic
<hr class="ch-divider" />

*Your coverage tracker for every key concept in this chapter. Check them off as you encounter them through problems or targeted reading. Weekly gap scan: review unchecked boxes and do a surgical read.*

## Coverage Map

### 2.1 — Boolean Equations

- [ ] Boolean variables and complements
- [ ] AND, OR, NOT operations in equation form
- [ ] Sum-of-Products (SOP) form
- [ ] Product-of-Sums (POS) form
- [ ] Relationship between truth tables and Boolean equations

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

### 2.2 — Boolean Algebra

- [ ] Axioms of Boolean algebra (identity, null, idempotency, involution, complement)
- [ ] Theorems of one variable (T1–T5)
- [ ] Theorems of multiple variables (commutativity, associativity, distributivity)
- [ ] De Morgan's Theorem — `(AB)' = A' + B'` and `(A+B)' = A'B'`
- [ ] Simplifying expressions using Boolean algebra
- [ ] Proving equivalence of two expressions

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

### 2.3 — From Logic to Gates

- [ ] AND, OR, NOT, NAND, NOR, XOR, XNOR gate symbols and truth tables
- [ ] NAND and NOR as universal gates
- [ ] Bubble pushing (converting between AND/OR and NAND/NOR representations)
- [ ] Why NAND/NOR are preferred in CMOS (fewer transistors, faster)

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

### 2.4 — Multilevel Combinational Logic

- [ ] Hardware reduction using multilevel logic (vs. two-level SOP/POS)
- [ ] Bubble pushing through multilevel circuits
- [ ] Fan-in considerations (why wide AND/OR gates are slow)

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

### 2.5 — X's and Z's, Don't Cares

- [ ] What X means in simulation (unknown/uninitialized)
- [ ] What Z means (high impedance / floating / tristate)
- [ ] Contention — two drivers fighting on the same wire
- [ ] Don't care inputs (`x` in truth tables) and how they help minimization
- [ ] **Why `default: y = y;` infers a latch** ✅ *(Learned from ChipDev latch-debug problem!)*

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

**Latches from incomplete assignments (from ChipDev "Remove an inferred latch"):**
A latch is NOT inferred just because `default` is missing. It is inferred whenever there exists ANY input condition where the output is not assigned a definitive new value. Writing `default: y = y;` explicitly tells the synthesizer to hold the old value — which requires memory — which means latch. Fix: always assign a concrete value in every branch. Also: match your bit-widths (`8'd0` not `1'b0` for an 8-bit output).

</div>

---

### 2.6 — Karnaugh Maps (K-Maps)

- [ ] 2-variable, 3-variable, 4-variable K-map layout
- [ ] Identifying prime implicants
- [ ] Essential prime implicants
- [ ] Using don't cares in K-maps to simplify further
- [ ] K-map to minimal SOP expression

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

### 2.7 — Combinational Building Blocks

- [ ] Multiplexers (2:1, 4:1, wider) — logic, truth table, and gate-level implementation
- [ ] Using MUXes to implement arbitrary Boolean functions (lookup table concept)
- [ ] Decoders — n-to-2^n, enable inputs
- [ ] Using decoders + OR gates to implement Boolean functions
- [ ] Encoders and priority encoders
- [ ] Tristate buffers and tristate buses

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

**Multiplexers (from ChipDev "Remove an inferred latch"):**
A 4:1 MUX with a 2-bit select `[1:0]` has exactly 4 possible input states (0, 1, 2, 3). For combinational logic, every state must have an explicit output assignment. Can be done with exhaustive case items OR a proper `default` with a concrete value.

</div>

---

### 2.8 — Timing

- [ ] Propagation delay (t_pd) — worst-case delay from input to output
- [ ] Contamination delay (t_cd) — minimum delay from input to output
- [ ] Why both matter (setup and hold time analysis uses both)
- [ ] Critical path — longest delay path through a circuit
- [ ] Glitches — what causes them, when they matter, when they don't
- [ ] How to identify glitches from K-maps (adjacent prime implicants)
- [ ] Fixing glitches by adding consensus terms

<div class="takeaways">
<h3>📝 Your Takeaways</h3>

*Write here after you encounter these concepts through a problem. Book closed. Your own words.*

</div>

---

## Problem Log

*Track every problem you solve that touches combinational logic concepts.*

| # | Source | Problem Name | Concepts Hit | Status |
|---|--------|-------------|-------------|--------|
| 1 | [SoC RTL Lab](https://xizhuwang.github.io/rtl-interview-lab/) (Xi-Zhu Wang) | Remove an inferred latch (`rtl-latch-debug`) | MUX, latch inference, don't cares. **Key insight:** Having a `default` case does NOT automatically prevent latch inference — the latch is caused by any execution path where the output is not assigned a *new* value. `default: y = y;` still infers a latch because it tells the synthesizer to hold the previous value, which requires memory. The fix is to assign a concrete, definitive value (e.g., `8'd0`) in every branch. Also: always match bit-widths in assignments. | ✅ Solved |
| | | | | |
| | | | | |

---

## Weekly Gap Scan

*Every Sunday night: scan the unchecked boxes above. Pick 2-3, do a targeted 15-minute read from Harris & Harris, then write your takeaway. Track it here.*

| Week | Date | Gaps Identified | Sections Read | Done? |
|------|------|----------------|---------------|-------|
| 1 | | | | |
| | | | | |
