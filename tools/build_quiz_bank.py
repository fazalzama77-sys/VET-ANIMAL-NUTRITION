# -*- coding: utf-8 -*-
"""
build_quiz_bank.py  —  Validates and compiles all 720 questions across Units 1-4 into data/data-quiz.JS
"""

import os
import sys
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)

import tools.quiz_data.unit1 as u1
import tools.quiz_data.unit2 as u2
import tools.quiz_data.unit3 as u3
import tools.quiz_data.unit4 as u4

TARGET = os.path.join(ROOT, "data", "data-quiz.JS")

VALID_SUBSECTIONS = {
    "unit-1": ["u1-s1", "u1-s2", "u1-s3", "u1-s4", "u1-s5"],
    "unit-2": ["u2-s1", "u2-s2"],
    "unit-3": ["u3-s1", "u3-s2", "u3-s3"],
    "unit-4": ["u4-s1", "u4-s2", "u4-s3"]
}

VALID_TOPIC_PREFIXES = {
    "unit-1": "u1-t",
    "unit-2": "u2-t",
    "unit-3": "u3-t",
    "unit-4": "u4-t"
}

def validate_unit(unit_id, data):
    mcq = data["mcq"]
    tf = data["tf"]
    fib = data["fib"]

    assert len(mcq) == 90, f"{unit_id} MCQ count must be 90, got {len(mcq)}"
    assert len(tf) == 45, f"{unit_id} TF count must be 45, got {len(tf)}"
    assert len(fib) == 45, f"{unit_id} FIB count must be 45, got {len(fib)}"

    sub_valid = VALID_SUBSECTIONS[unit_id]
    top_prefix = VALID_TOPIC_PREFIXES[unit_id]

    for i, q in enumerate(mcq):
        assert q["q"] and isinstance(q["q"], str), f"{unit_id} MCQ #{i} empty q"
        assert len(q["o"]) == 4, f"{unit_id} MCQ #{i} must have 4 options"
        assert q["a"] in (0, 1, 2, 3), f"{unit_id} MCQ #{i} invalid a: {q['a']}"
        assert q["e"], f"{unit_id} MCQ #{i} missing explanation"
        assert q["subSection"] in sub_valid, f"{unit_id} MCQ #{i} invalid subSection: {q['subSection']}"
        assert q["topicId"].startswith(top_prefix), f"{unit_id} MCQ #{i} invalid topicId: {q['topicId']}"
        assert q["diff"] in (1, 2, 3), f"{unit_id} MCQ #{i} invalid diff: {q['diff']}"

    for i, q in enumerate(tf):
        assert q["q"] and isinstance(q["q"], str), f"{unit_id} TF #{i} empty q"
        assert isinstance(q["a"], bool), f"{unit_id} TF #{i} a must be bool, got {type(q['a'])}"
        assert q["e"], f"{unit_id} TF #{i} missing explanation"
        assert q["subSection"] in sub_valid, f"{unit_id} TF #{i} invalid subSection: {q['subSection']}"
        assert q["topicId"].startswith(top_prefix), f"{unit_id} TF #{i} invalid topicId: {q['topicId']}"
        assert q["diff"] in (1, 2, 3), f"{unit_id} TF #{i} invalid diff: {q['diff']}"

    for i, q in enumerate(fib):
        assert q["q"] and isinstance(q["q"], str), f"{unit_id} FIB #{i} empty q"
        assert "____" in q["q"], f"{unit_id} FIB #{i} missing '____' in question text"
        assert isinstance(q["a"], list) and len(q["a"]) > 0, f"{unit_id} FIB #{i} invalid a list"
        assert q["a_display"], f"{unit_id} FIB #{i} missing a_display"
        assert q["e"], f"{unit_id} FIB #{i} missing explanation"
        assert q["subSection"] in sub_valid, f"{unit_id} FIB #{i} invalid subSection: {q['subSection']}"
        assert q["topicId"].startswith(top_prefix), f"{unit_id} FIB #{i} invalid topicId: {q['topicId']}"
        assert q["diff"] in (1, 2, 3), f"{unit_id} FIB #{i} invalid diff: {q['diff']}"

    print(f"[{unit_id}] Validation PASSED: 90 MCQ, 45 TF, 45 FIB (Total = {len(mcq)+len(tf)+len(fib)})")

def main():
    u1_data = u1.get_data()
    u2_data = u2.get_data()
    u3_data = u3.get_data()
    u4_data = u4.get_data()

    validate_unit("unit-1", u1_data)
    validate_unit("unit-2", u2_data)
    validate_unit("unit-3", u3_data)
    validate_unit("unit-4", u4_data)

    bank = {
        "unit-1": u1_data,
        "unit-2": u2_data,
        "unit-3": u3_data,
        "unit-4": u4_data
    }

    header = """/* ============================================================
   data-quiz.JS  —  Quiz Question Bank
   Animal Nutrition Studio
   ------------------------------------------------------------
   720 Examination-Grade Questions across Units 1 to 4
   Strict 2 : 1 : 1 Ratio (90 MCQ : 45 TF : 45 FIB per unit)
   180 Questions per Unit | 32 Thematic Sub-Sections
   ============================================================ */

"""
    js_content = header + "var quizBank = " + json.dumps(bank, indent=2, ensure_ascii=False) + ";\n"

    with open(TARGET, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully written {os.path.getsize(TARGET):,} bytes to {TARGET}")

if __name__ == "__main__":
    main()
