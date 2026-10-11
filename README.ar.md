# محرك الإصلاح الذاتي للاختبارات الشاملة المدعوم بالذكاء الاصطناعي

**[English](README.md)** · [한국어](README.ko.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · **العربية**

[![CI](https://github.com/Lee-Dongwook/E2E-Self-Heal/actions/workflows/ci.yml/badge.svg)](https://github.com/Lee-Dongwook/E2E-Self-Heal/actions/workflows/ci.yml)
[![Python 3.13+](https://img.shields.io/badge/python-3.13%2B-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

محرك **الإصلاح الذاتي** الذي يصلح تلقائيًا اختبارات **Playwright** المعطلة باستخدام **وكيل ذكاء اصطناعي** مبني على **LangGraph**. عندما يؤدي تغيير في واجهة المستخدم إلى كسر محدد الاختبار، يقوم المحرك بتشخيص الفشل وتصحيح المحدد والتحقق منه مقابل DOM المباشر.

> **حاجز النطاق:** المحرك يصلح فقط **المحددات الفاشلة وشروط الانتظار**. لا يلمس أبدًا التأكيدات أو منطق الاختبار.

## كيف يعمل

1. **CLI core** - نقطة الدخول الوحيدة
2. **Data Preprocessor** - تحليل السجل والـ diff
3. **LangGraph agent** - التشخيص والتصحيح والتحقق
4. **Test Runner** - إعادة تشغيل الاختبار حتى ينجح

## البدء السريع

```bash
pip install ai-driven-e2e
e2e-healer your-test.spec.ts --log playwright.log
